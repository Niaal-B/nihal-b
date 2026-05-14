import EventList from "@/components/sections/events";
import Layout from "@/components/layout/layout";
import { events } from "@/constants";

export const metadata = {
  title: "Events",
};

const Events = () => {
  return (
    <Layout
      showHeader
      title="Events & Hackathons"
      subtitle="Conferences, meetups, and competitions I've been part of."
    >
      <EventList events={events} />
    </Layout>
  );
};

export default Events;
