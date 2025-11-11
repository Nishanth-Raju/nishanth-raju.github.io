import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/raju.png";
import team3 from "@/assets/banu_prakash.jpg";

const team = [
  {
    name: "Nishanth Raju",
    role: "CEO & Founder",
    image: team1,
    bio: "5+ years of experience in tech leadership and business strategy.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Raju Shanmugam",
    role: "CTO",
    image: team2,
    bio: "Expert in software architecture and emerging technologies.",
    social: {
      linkedin: "https://www.linkedin.com/in/prof-dr-s-raju-me-phd-3505a533",
      twitter: "#",
    },
  },
  {
    name: "R. Banu Prakash",
    role: "Head of Marketing",
    image: team3,
    bio: "Strategic marketing leader with a focus on digital transformation.",
    social: {
      linkedin: "https://in.linkedin.com/in/banu-prakash-r-98b2a8124",
      twitter: "#",
    },
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented individuals united by a passion for innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-glow transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-glow transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
