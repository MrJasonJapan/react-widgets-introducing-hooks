import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    // Don't do anything special if the user 'Ctrl-Clicks' on the link.
    // Just open the URL as normal (in a new tab in this case)
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    // Tell our components in the app that URL has just changed.
    // So, each component will receive an event that the URL has just changed.
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
