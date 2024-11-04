const { default: Plans } = require("@/components/custom/Plans");

const Plan = () => {
  return (
    <div className="py-20 px-10 space-y-8">
      <h1 className="text-5xl font-semibold text-center">
        Add Your Restaurant
      </h1>
      <Plans />
    </div>
  );
};

export default Plan;
