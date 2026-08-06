import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/blog/ki-readiness-hero.jpg";

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog: Fachbeiträge zu Medientechnik & AV/IT"
        description="Fachbeiträge der SLT Technology Group zu Medientechnik, Konferenzraumtechnik, AV/IT-Konvergenz und KI in der professionellen Medientechnik."
        keywords="AV Blog, Medientechnik Fachbeitrag, KI Medientechnik, AV/IT-Konvergenz"
        canonical="/blog"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">Blog</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Fachbeiträge aus der <span className="text-primary">AV- & IT-Systemintegration</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground">
              Hintergründe und Praxiswissen für Geschäftsführer, IT-Leiter und Facility-Verantwortliche.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <Card className="h-full overflow-hidden flex flex-col transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={heroImage}
                      alt="Moderner Konferenzraum mit Videokonferenztechnik und abstrakter Visualisierung von KI-Datenströmen"
                      width={1600}
                      height={912}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <Badge variant="secondary" className="text-[10px]">{post.category}</Badge>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("de-DE")}
                      </span>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-base lg:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.h1}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Beitrag lesen <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
