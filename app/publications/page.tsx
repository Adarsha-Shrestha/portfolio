import { Navigation } from "@/components/navigation"
import { AuraBackground } from "@/components/aura-background"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { PublicationCard } from "@/components/publication-card"

export const metadata = {
  title: "Publications",
  description: "Academic publications and research work",
}

const publications = [
  {
    title: "Subword Tokenization Optimization for Nepali Language: A Comparative Evaluation of Segmentation Strategies",
    authors: ["Adarsha Shrestha", "Basanta Pokharel", "Binit Shrestha", "Smriti Adhikari"],
    venue: "International Conference on Modern Mathematical Methods and High-Performance Computing in Science & Technology",
    year: 2026,
    type: "conference" as const,
    pdfUrl: "#",
    // slidesUrl: "#",
    abstract:
      "Low-resource languages like Nepali face persistent challenges in natural language processing due to limited linguistic resources and tokenizers that struggle to capture their morphological complexity. Nepali’s agglutinative structure and Devanagari script introduce segmentation difficulties that general-purpose methods often fail to handle effectively. To address these limitations, this study develops and evaluates custom Nepali subword tokenizers using the SentencePiece framework, comparing Byte Pair Encoding, Unigram, and WordPiece across vocabulary sizes of 16k, 32k, and 50k tokens. A high-quality corpus was created by combining the NepBERTa dataset with curated news articles from Kantipur and OnlineKhabar, followed by extensive preprocessing to ensure linguistic consistency. Each tokenizer was integrated into a GPT-2 model and assessed using token-to-word ratio, coverage metrics, and perplexity. The results show that WordPiece with a 16k vocabulary provides the most compact segmentation, achieving a token-to-word ratio of 0.9787, which is notably lower than the BPE and Unigram models at the same scale. Larger vocabularies generally help reduce perplexity. For example, BPE at 16k begins around 21.8, while Unigram models at 32k and 50k fall in the 29 to 31 range, though these gains offer diminishing improvements in compression. Although the baseline o200k model attains a very low perplexity of 6.26, its massive vocabulary introduces redundancy, whereas the custom models achieve higher token coverage with far smaller vocabularies, making them more efficient for Nepali. The findings emphasize that a well-tuned WordPiece tokenizer balances compactness and performance for Nepali NLP."
      ,
  },
  {
    title: "Towards Nepali-Language LLMs: Efficient GPT-2 Training with a Nepali BPE Tokenizer",
    authors: ["Adarsha Shrestha", "Basanta Pokharel", "Binit Shrestha", "Smriti Adhikari"],
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint" as const,
    pdfUrl: "#",
    abstract:
      "Nepali, a low-resource language spoken by over 32 million people, continues to face challenges in natural language processing (NLP) due to its complex grammar, agglutinative morphology, and limited availability of high-quality corpora. Most efforts to date have centered on basic encoder architectures; they remain insufficient for Nepali-specific text generation. This study presents a GPT-2–based Nepali language model trained using several training strategies inspired by GPT-3, including optimized learning rate schedules, batch scaling, and architectural refinements. A custom 16k Byte-Pair Encoding (BPE) tokenizer was trained exclusively on Nepali text to ensure more consistent segmentation and improved input representation. The model was pretrained on a combined dataset comprising a 10.75GB cleaned NepBERTa corpus and additional web-scraped Nepali news articles. FlashAttention was integrated to reduce memory usage and stabilize training. After two epochs, the model achieved a training loss of 3.168177, a validation loss of 3.081982, and a final perplexity of 21.80, demonstrating its capability to generate coherent Nepali news-style text.",
  },
  // {
  //   title: "Neural Style Transfer for Traditional Asian Art: Challenges and Solutions",
  //   authors: ["Your Name", "Co-Author Four", "Co-Author Five"],
  //   venue: "ACM SIGGRAPH Asia",
  //   year: 2023,
  //   type: "conference" as const,
  //   pdfUrl: "#",
  //   slidesUrl: "#",
  //   abstract:
  //     "We address unique challenges in applying neural style transfer to traditional Asian art forms, including handling gold leaf textures and intricate geometric patterns.",
  // },
  // {
  //   title: "Multimodal Learning for Art Historical Analysis",
  //   authors: ["Your Name", "Co-Author Six"],
  //   venue: "arXiv preprint",
  //   year: 2023,
  //   type: "preprint" as const,
  //   pdfUrl: "#",
  //   abstract:
  //     "A preprint exploring the combination of visual and textual analysis for understanding historical art pieces and their cultural context.",
  // },
  // {
  //   title: "Automated Detection of Artistic Techniques in Thangka Paintings",
  //   authors: ["Your Name", "Co-Author Seven", "Co-Author Eight"],
  //   venue: "International Conference on Machine Learning (ICML)",
  //   year: 2023,
  //   type: "conference" as const,
  //   pdfUrl: "#",
  //   slidesUrl: "#",
  // },
  // {
  //   title: "Cross-Cultural Image Generation Using Diffusion Models",
  //   authors: ["Your Name", "Co-Author Nine"],
  //   venue: "Transactions on Machine Learning Research",
  //   year: 2022,
  //   type: "journal" as const,
  //   pdfUrl: "#",
  // },
]

export default function PublicationsPage() {
  return (
    <>
      <AuraBackground />
      <Navigation />
      <PageTransition>
        <main className="pt-32 pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Academic Work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Publications</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                My research focuses on the intersection of machine learning and cultural heritage preservation, with
                publications in top-tier venues.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.2} className="mb-16">
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <div className="glass-panel rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
                <div className="glass-panel rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">h-index</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Publications List */}
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <PublicationCard key={pub.title} {...pub} index={index} />
              ))}
            </div>
          </div>
        </main>
      </PageTransition>
    </>
  )
}
