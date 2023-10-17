export const Statistic = () => {
  const statisticsData = [
    {
      value: 600,
      title: "Fitness center",
    },
    {
      value: 1200,
      title: "Expert  Trainer",
    },
    {
      value: 700,
      title: "Global Gym",
    },
    {
      value: 700,
      title: "Fantastic Traine",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-12">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        {statisticsData.map((stat, i) => (
          <div className="text-left mx-auto" key={i}>
            <p className="font-bold">{stat.title}</p>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              {stat.value}+
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};
