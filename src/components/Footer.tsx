const Footer = () => {
  const footerLinks = [
    {
      title: "Use cases",
      links: [
        "UI design",
        "UX design", 
        "Wireframing",
        "Diagramming",
        "Brainstorming",
        "Online whiteboard",
        "Team collaboration"
      ]
    },
    {
      title: "Explore",
      links: [
        "Design",
        "Prototyping",
        "Development features",
        "Design systems",
        "Collaboration features",
        "Design process",
        "FigJam"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Best practices",
        "Colors",
        "Color wheel",
        "Support",
        "Developers",
        "Resource library"
      ]
    }
  ];

  return (
    <footer className="w-full px-4 md:px-8 pt-8 pb-20 md:pb-40 bg-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 md:gap-4">
        {/* Logo and Social */}
        <div className="w-full md:w-64 min-w-60 space-y-6">
          <div className="flex items-center">
            <div className="w-6 h-9 bg-primary rounded-sm"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-muted-foreground rounded"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded"></div>
          </div>
        </div>

        {/* Footer */}
        {footerLinks.map((section, index) => (
          <div key={index} className="w-full md:w-64 space-y-3">
            <h3 className="text-base font-semibold text-foreground pb-4">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex} className="h-5">
                  <a 
                    href="#" 
                    className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
