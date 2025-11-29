import { useLanguage } from "@/contexts/LanguageContext";

const WorkingHours = () => {
  const { t } = useLanguage();

  return (
    <div className="absolute top-4 right-4 w-1/4 bg-white bg-opacity-90 shadow-lg rounded-lg p-4 z-10">
      <h3 className="text-xl font-semibold mb-2 text-foreground">
        {t("workingHoursTitle")}
      </h3>
      <div className="space-y-1 text-muted-foreground text-sm">
        {t("workingHours")?.split("|").map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default WorkingHours;