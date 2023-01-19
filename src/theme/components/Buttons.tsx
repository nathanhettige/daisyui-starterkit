export const Buttons = (
  <div className="grid grid-cols-2 flex-wrap gap-x-1 gap-y-1">
    <button className="btn">Neutral</button>
    <button className="btn-primary btn">Primary</button>
    <button className="btn-secondary btn">Secondary</button>
    <button className="btn-accent btn">Accent</button>
    <button className="btn-base-100 btn">Base-100</button>
    <button className="btn-info btn">Info</button>
    <button className="btn-success btn">Success</button>
    <button className="btn-warning btn">Warning</button>
    <button className="btn-error btn">Error</button>
    <button className="btn-disabled btn">Disabled</button>
    <button className="loading btn flex flex-nowrap">Loading</button>
    <button className="btn-outline btn">Outline</button>
  </div>
);

export const ButtonTypes = (
  <div className="grid grid-cols-[auto,1fr] gap-1">
    <div className="flex flex-col gap-2">
      <button className="btn-lg btn">Large</button>
      <button className="btn">Normal</button>
      <button className="btn-sm btn">Small</button>
      <button className="btn-xs btn">Tiny</button>
    </div>
    <div className="my-auto flex flex-row flex-wrap items-center justify-center gap-3">
      <button className="btn-square btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn-outline btn-square btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn-circle btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn-outline btn-circle btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Icon
      </button>
      <button className="loading btn-square btn"></button>
    </div>
  </div>
);
