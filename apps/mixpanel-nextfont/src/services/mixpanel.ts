"use client";

import mixpanel from "mixpanel-browser";

interface EventProperties {
  [key: string]: string | number | boolean;
}

type MixpanelEventName = "Button Clicked" | "Page Viewed";

export const initializeMixpanel = () => {
  mixpanel?.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? "", {
    debug: false,
    track_pageview: true,
    persistence: "localStorage",
  });
};

export const trackPageView = () => {
  mixpanel?.track_pageview();
};

export const identifyUser = (userId: string) => {
  mixpanel?.identify(userId);
};

export const createAlias = (aliasId: string) => {
  mixpanel?.alias(aliasId);
};

export const trackEvent = (
  eventName: MixpanelEventName,
  properties?: EventProperties,
) => {
  mixpanel?.track(eventName, properties);
};

export const setPeopleProperties = (properties: EventProperties) => {
  mixpanel?.people?.set(properties);
};

export const resetMixpanel = () => {
  mixpanel?.reset();
};
