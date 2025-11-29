import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto text-primary-50 px-6 lg:px-0 py-10 lg:py-20">
      {/* Section Title */}
      <h2 className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter">
        All The Tools You Need to <br className="sm:hidden" />
        <span className="text-primary-500">Supercharge</span> Your Note Taking
      </h2>

      {/* Smart Organization */}
      <div className="mb-16 md:mb-20 grid md:grid-cols-2 gap-x-12 gap-y-12 items-center">
        <figure className="flex justify-center order-2 md:order-1 md:justify-start">
          <img
            className="max-h-[30rem] md:max-h-[45rem] w-full object-contain"
            src={SmartOrganization}
            alt="Smart Organization graphic"
          />
        </figure>
        <div className="max-w-lg md:justify-self-end order-1 md:order-2 md:text-left">
          <p className="mb-6 md:mb-8 text-3xl md:text-5xl font-semibold tracking-tighter">
            Smart Organization
          </p>
          <p className="text-primary-100 text-lg md:text-xl font-light">
            Automatically categorize and tag your notes using AI-driven
            analysis. NoteFlow intelligently identifies key topics and organizes
            your content, making it easy to find and retrieve your notes when
            you need them most.
          </p>
        </div>
      </div>

      {/* Contextual Reminders */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 items-center">
        <div className="max-w-lg md:justify-self-start  md:text-left order-1 md:order-1">
          <p className="mb-6 md:mb-8 text-3xl md:text-5xl font-semibold tracking-tighter">
            Contextual Reminders
          </p>
          <p className="text-primary-100 text-lg md:text-xl font-light">
            Stay on top of important tasks with AI-powered reminders that adapt
            to the context of your notes. NoteFlow recognizes deadlines,
            follow-ups, and key actions from your notes and sends timely alerts
            to ensure nothing slips through the cracks.
          </p>
        </div>
        <figure className="flex justify-center md:justify-end order-2 md:order-2">
          <img
            className="max-h-[30rem] md:max-h-[45rem] w-full object-contain"
            src={ContextualReminders}
            alt="Contextual Reminders graphic"
          />
        </figure>
      </div>
    </div>
  );
};

export default Features;
