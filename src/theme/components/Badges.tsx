const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-3 h-3 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export const Badges = (
  // <div className="[&>*>*]:mr-1 [&>*>*]:mb-2">
  <div className="flex flex-col items-center [&>*]:space-x-2 space-y-2">
    <div>
      <div className="badge">neutral</div>
      <div className="badge badge-primary">primary</div>
      <div className="badge badge-secondary">secondary</div>
      <div className="badge badge-accent">accent</div>
    </div>
    <div>
      <div className="badge badge-outline">neutral</div>
      <div className="badge badge-primary badge-outline">primary</div>
      <div className="badge badge-secondary badge-outline">secondary</div>
      <div className="badge badge-accent badge-outline">accent</div>
    </div>
    <div>
      <div className="badge badge-info gap-2">
        <CrossIcon />
        info
      </div>
      <div className="badge badge-success gap-2 items-center">
        <CrossIcon />
        success
      </div>
      <div className="badge badge-warning gap-2">
        <CrossIcon />
        warning
      </div>
      <div className="badge badge-error gap-2">
        <CrossIcon />
        error
      </div>
    </div>
  </div>
);
