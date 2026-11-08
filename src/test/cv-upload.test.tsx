import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { createCvUploadPath } from "@/lib/cv-upload";
import { JobApplicationForm } from "@/components/karriere/JobApplicationForm";
import { JOBS } from "@/data/jobs";

const mocks = vi.hoisted(() => ({
  upload: vi.fn().mockResolvedValue({ error: null }),
  insert: vi.fn().mockResolvedValue({ error: null }),
  invoke: vi.fn().mockResolvedValue({ error: null }),
  toast: vi.fn(),
}));
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast: mocks.toast }) }));
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    storage: { from: () => ({ upload: mocks.upload }) },
    from: () => ({ insert: mocks.insert }),
    functions: { invoke: mocks.invoke },
  },
}));

describe("CV uploads with umlauts", () => {
  it("uploads Müller with an umlaut filename while preserving the applicant's name", async () => {
    const job = JOBS[0];
    if (!job) throw new Error("Missing job fixture");
    const { container, getByLabelText } = render(<JobApplicationForm job={job} />);
    fireEvent.change(getByLabelText("Vorname *"), { target: { value: "Jörg" } });
    fireEvent.change(getByLabelText("Nachname *"), { target: { value: "Müller" } });
    fireEvent.change(getByLabelText("E-Mail *"), { target: { value: "test@example.com" } });
    const input = container.querySelector('input[type="file"]');
    const form = container.querySelector("form");
    if (!input || !form) throw new Error("Missing application controls");
    const file = new File(["test"], "Lebenslauf Jörg Müller ß.pdf", { type: "application/pdf" });
    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.submit(form);
    await waitFor(() => expect(mocks.insert).toHaveBeenCalled());
    const path = mocks.upload.mock.calls[0]?.[0];
    expect(path).toMatch(/^[a-f0-9-]{36}\.pdf$/);
    expect(mocks.upload).toHaveBeenCalledWith(path, file);
    expect(mocks.insert).toHaveBeenCalledWith(expect.objectContaining({
      first_name: "Jörg", last_name: "Müller", cv_file_path: path,
    }));
    expect(mocks.invoke).toHaveBeenCalledWith("send-contact-email", expect.objectContaining({
      body: expect.objectContaining({ name: "Jörg Müller", cvFilePath: path }),
    }));
  });

  it.each([
    ["application/pdf", "pdf"],
    ["application/msword", "doc"],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"],
  ])("uses a unique safe key for %s", (type, extension) => {
    const first = createCvUploadPath({ type });
    expect(first).toMatch(new RegExp(`^[a-f0-9-]{36}\\.${extension}$`));
    expect(createCvUploadPath({ type })).not.toBe(first);
  });
});