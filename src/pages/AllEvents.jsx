import { useEffect, useState } from "react";
import instance from "../axios";
import Events from "../components/Events";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    instance.get("events").then((res) => {
      setEvents(res.data.data);
      setLoading(false);
    });
  }, []);
  return <Events events={events} loading={loading} />;
}
