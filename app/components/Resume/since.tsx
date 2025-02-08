import { resume } from "@/lib/static";
import WorkElement from "./WorkElement";

const Since = ({ timeId }: { timeId: string }) => {
  return (
    <div>
      <div className="text-4xl font-black md:hidden text-purple-500 w-full">
        <div>
          {timeId === "present" && "Present"}
          {timeId === "2022" && "2022"}
          {timeId === "2018" && "2018"}
          {timeId === "2015" && "2015"}
        </div>
      </div>
      <div className="flex flex-col py-12">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col gap-8 w-full">
            {timeId === "present" && present}
            {timeId === "2022" && t2}
            {timeId === "2018" && t18}
            {timeId === "2015" && t15}
          </div>
          <div className="text-7xl font-black hidden md:block text-purple-500 text-center w-full">
            <div>
              {timeId === "present" && "Present"}
              {timeId === "2022" && "2022"}
              {timeId === "2018" && "2018"}
              {timeId === "2015" && "2015"}
            </div>
          </div>
        </div>
        {/* horizontal line */}

        {timeId !== "2015" && (
          <div className="h-0.5 w-full bg-gradient-to-l from-purple-700 to-purple-400 mt-12"></div>
        )}
      </div>
    </div>
  );
};
export default Since;

// const presentCount = resume.filter((i) => i.since === "present").length;

const present = resume
  .filter((f) => f.since === "present")
  .map((r) => (
    <WorkElement
      key={r.id}
      id={r.id}
      role={r.role}
      company={r.company}
      location={r.location}
      date={r.date}
    />
  ));
const t2 = resume
  .filter((f) => f.since === "2022")
  .map((r) => (
    <WorkElement
      key={r.id}
      id={r.id}
      role={r.role}
      company={r.company}
      location={r.location}
      date={r.date}
    />
  ));
const t18 = resume
  .filter((f) => f.since === "2018")
  .map((r) => (
    <WorkElement
      key={r.id}
      id={r.id}
      role={r.role}
      company={r.company}
      location={r.location}
      date={r.date}
    />
  ));
const t15 = resume
  .filter((f) => f.since === "2015")
  .map((r) => (
    <WorkElement
      key={r.id}
      id={r.id}
      role={r.role}
      company={r.company}
      location={r.location}
      date={r.date}
    />
  ));
