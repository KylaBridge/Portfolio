import skills from "../data/skills";

function ProgressBar({ value = 0 }) {
  const percentage = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ffde59]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className="w-12 text-right text-sm font-medium text-white/90">
        {percentage}%
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-white mt-25 md:mt-0">
        My Skills
      </h2>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Languages */}
        <div className="p-6 border border-[#ffde59] rounded-lg bg-black">
          <h3 className="text-lg font-semibold text-[#ffde59] mb-4">
            Languages
          </h3>
          <ul className="space-y-4">
            {skills.languages.map((s) => {
              return (
                <li key={s.id} className="flex flex-col">
                  <div className="text-sm font-semibold text-white mb-2">
                    {s.name}
                  </div>
                  <ProgressBar value={s.level} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Web Technologies */}
        <div className="p-6 border border-[#ffde59] rounded-lg bg-black">
          <h3 className="text-lg font-semibold text-[#ffde59] mb-4">
            Web Technologies
          </h3>
          <ul className="space-y-4">
            {skills.web.map((s) => {
              return (
                <li key={s.id} className="flex flex-col">
                  <div className="text-sm font-semibold text-white mb-2">
                    {s.name}
                  </div>
                  <ProgressBar value={s.level} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tools */}
        <div className="p-6 border border-[#ffde59] rounded-lg bg-black">
          <h3 className="text-lg font-semibold text-[#ffde59] mb-4">Tools</h3>
          <ul className="space-y-4">
            {skills.tools.map((s) => {
              return (
                <li key={s.id} className="flex flex-col">
                  <div className="text-sm font-semibold text-white mb-2">
                    {s.name}
                  </div>
                  <ProgressBar value={s.level} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
