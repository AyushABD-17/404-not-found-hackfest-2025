
export const ProgressSteps = ({ steps }: { steps: { id: string, label: string, active: boolean }[] }) => {
    return <div className="mb-10">
        <div className="flex flex-wrap gap-4 justify-between md:justify-start md:space-x-4 pb-5 border-b border-gray-700/30">
            {steps.map((step) => (
                <div key={step.id} className="flex items-center mb-4 md:mb-0">
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white font-medium ${step.active ? 'bg-indigo-600' : 'bg-gray-700/50'
                            }`}
                    >
                        {step.id}
                    </div>
                    <span className={step.active ? 'text-white' : 'text-gray-400'}>
                        {step.label}
                    </span>
                </div>
            ))}
        </div>
    </div>;
};

