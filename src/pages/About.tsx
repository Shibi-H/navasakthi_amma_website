import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient-sacred">About Divine Path</h1>
            <p className="text-xl text-muted-foreground">
              Guiding souls on their spiritual journey through ancient wisdom and divine grace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="shadow-peaceful">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full gradient-sacred flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create a sacred digital sanctuary where seekers can explore Hindu philosophy, 
                  connect with divine teachings, and cultivate spiritual growth. We strive to make 
                  ancient wisdom accessible to all, fostering a global community united in devotion 
                  and spiritual practice.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-peaceful">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full gradient-sacred flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's leading digital platform for Hindu spirituality, preserving 
                  and propagating timeless teachings for future generations. We envision a world 
                  where everyone has access to divine knowledge, spiritual practices, and the 
                  support of a loving community on their path to moksha.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div className="bg-card p-8 rounded-lg shadow-peaceful">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Divine Path was founded in 2020 by a group of devoted spiritual seekers and scholars 
                who recognized the need for a comprehensive digital resource for Hindu spirituality. 
                What began as a small website sharing daily mantras has grown into a vibrant community 
                serving thousands of devotees worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform is blessed by the guidance of revered spiritual teachers from the 
                Advaita Vedanta and Bhakti traditions. We maintain close relationships with several 
                ancient temples across India, ensuring the authenticity and accuracy of all spiritual 
                content shared on our platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Divine Path offers comprehensive resources including scripture translations, 
                pooja guides, festival calendars, and live streaming of sacred rituals. We continue 
                to expand our offerings while staying true to our core mission of spreading divine 
                love and wisdom.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Spiritual Guides</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Swami Brahmananda",
                  title: "Vedanta Scholar",
                  description: "40+ years of teaching Advaita Vedanta philosophy"
                },
                {
                  name: "Pandit Ramakrishna Shastri",
                  title: "Sanskrit Expert",
                  description: "Renowned expert in Vedic scriptures and rituals"
                },
                {
                  name: "Sri Devi Amma",
                  title: "Bhakti Teacher",
                  description: "Guiding devotees in the path of loving devotion"
                }
              ].map((guide, index) => (
                <Card key={index} className="text-center shadow-peaceful">
                  <CardContent className="pt-8">
                    <div className="w-20 h-20 rounded-full gradient-divine mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
                    <p className="text-primary font-semibold mb-3">{guide.title}</p>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Our Spiritual Family</h3>
                <p className="text-muted-foreground mb-6">
                  Become part of a global community dedicated to spiritual growth, 
                  devotion, and service. Together, we walk the divine path.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
