const CV_EXTENSIONS: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

/** Storage keys are ASCII-only and independent of applicants' personal names. */
export function createCvUploadPath(file: Pick<File, "type">): string {
  const extension = CV_EXTENSIONS[file.type];
  if (!extension) throw new Error("Unsupported CV file type");
  return `${crypto.randomUUID()}.${extension}`;
}