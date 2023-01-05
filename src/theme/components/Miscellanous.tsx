export const Checkboxes = (
  <div className="space-x-2">
    <input type="checkbox" className="toggle-success toggle" checked />
    <input type="checkbox" className="toggle-warning toggle" checked />
    <input type="checkbox" className="toggle-info toggle" checked />
    <input type="checkbox" className="toggle-error toggle" checked />
  </div>
);

export const Range = (
  <div>
    <input
      type="range"
      min="0"
      max="100"
      value="40"
      className="range range-xs"
    />
    <input
      type="range"
      min="0"
      max="100"
      value="50"
      className="range range-sm"
    />
    <input
      type="range"
      min="0"
      max="100"
      value="60"
      className="range range-md"
    />
    <input
      type="range"
      min="0"
      max="100"
      value="70"
      className="range range-lg"
    />
  </div>
);

export const Rating = (
  <div className="flex flex-col space-y-2">
    <div className="rating rating-xs">
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-6"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
    <div className="rating rating-lg">
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-8"
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  </div>
);

export const Select = (
  <div className="flex flex-col space-y-2">
    <select className="select-bordered select select-lg w-full">
      <option disabled selected>
        Large
      </option>
      <option>Large Apple</option>
      <option>Large Orange</option>
      <option>Large Tomato</option>
    </select>
    <select className="select-bordered select w-full">
      <option disabled selected>
        Normal
      </option>
      <option>Normal Apple</option>
      <option>Normal Orange</option>
      <option>Normal Tomato</option>
    </select>
    <select className="select-bordered select select-sm w-full">
      <option disabled selected>
        Small
      </option>
      <option>Small Apple</option>
      <option>Small Orange</option>
      <option>Small Tomato</option>
    </select>
    <select className="select-bordered select select-xs w-full">
      <option disabled selected>
        Tiny
      </option>
      <option>Tiny Apple</option>
      <option>Tiny Orange</option>
      <option>Tiny Tomato</option>
    </select>
  </div>
);

export const ButtonGroup = (
  <div className="space-y-2">
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
      <button className="btn">Button</button>
      <button className="btn btn-active">Button</button>
      <button className="btn">Button</button>
    </div>
    <div className="btn-group">
      <input type="radio" name="options" data-title="1" className="btn" />
      <input
        type="radio"
        name="options"
        data-title="2"
        className="btn"
        checked
      />
      <input type="radio" name="options" data-title="3" className="btn" />
      <input type="radio" name="options" data-title="4" className="btn" />
    </div>
  </div>
);

export const SocialLinks = (
  <div className="flex flex-row gap-4">
    <a href="http://twitter.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a href="http://youtube.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a href="http://facebook.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </div>
);

export const InputGroup = (
  <div className="flex flex-col space-y-2">
    <div className="form-control">
      <label className="input-group-lg input-group">
        <span>LG</span>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input input-lg"
        />
      </label>
    </div>
    <div className="form-control">
      <label className="input-group-md input-group">
        <span>MD</span>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input input-md"
        />
      </label>
    </div>
    <div className="form-control">
      <label className="input-group-sm input-group">
        <span>SM</span>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input input-sm"
        />
      </label>
    </div>
    <div className="form-control">
      <label className="input-group-xs input-group">
        <span>XS</span>
        <input
          type="text"
          placeholder="Type here"
          className="input-bordered input input-xs"
        />
      </label>
    </div>
  </div>
);

export const StackedCards = (
  <div>
    <div className="stack">
      <div className="card bg-primary text-primary-content shadow-md">
        <div className="card-body">
          <h2 className="card-title">Notification 1</h2>
          <p>You have 3 unread messages. Tap here to see.</p>
        </div>
      </div>
      <div className="card bg-primary text-primary-content shadow">
        <div className="card-body">
          <h2 className="card-title">Notification 2</h2>
          <p>You have 3 unread messages. Tap here to see.</p>
        </div>
      </div>
      <div className="card bg-primary text-primary-content shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Notification 3</h2>
          <p>You have 3 unread messages. Tap here to see.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Breadcrumbs = (
  <div>
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Documents</a>
        </li>
        <li>Add Document</li>
      </ul>
    </div>
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            Documents
          </a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Add Document
        </li>
      </ul>
    </div>
  </div>
);

export const Code = (
  <div className="mockup-code">
    <pre data-prefix="1">
      <code>npm i daisyui</code>
    </pre>
    <pre data-prefix="2">
      <code>installing...</code>
    </pre>
    <pre data-prefix="3" className="bg-warning text-warning-content">
      <code>Error!</code>
    </pre>
  </div>
);
