'use client';
import React, {useState,useEffect} from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search,setSearch] = useState('');
  const [queue, setQueue] = useState({});

  // fetch tickets
  useEffect(() =>{ 
    async function fetchTickets() {
      try {
        console.log('Fetching tickets from /api/tickets...');
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Error fetching tickets');
        const data = await res.json();
        setTickets(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
      const res = await fetch('/api/tickets', {cache: 'no-store'});

    }
    fetchTickets();

  }, []);

  // simulate live updates
  useEffect(() => {
    if (!tickets.length) return;
    const interval = setInterval(() => {
      setTickets((prev) => {
        const copy = [...prev];
        const randomIndex = Math.floor(Math.random() * copy.length);
        const t = { ...copy[randomIndex] };

        const statusTransitions = {
          Open: 'In Progress',
          'In Progress': 'On Hold',
          'On Hold': 'Resolved',
          Resolved: 'Open'
        };
        const priorityLevels = ['Low', 'Medium', 'High', 'Critical'];

        if (Math.random() > 0.5) {
          t.status = statusTransitions[t.status] || t.status;
        } else {
          const idx = priorityLevels.indexOf(t.priority);
          t.priority = priorityLevels[(idx + 1) % priorityLevels.length];
        }

        t.updatedAt = new Date().toISOString();
        copy[randomIndex] = t;
        return copy;
      });
    }, Math.floor(Math.random() * 4000) + 6000);

    return () => clearInterval(interval);
  }, [tickets]);

  const visibleTickets =tickets.filter((t) => {
    const matchStatus = filters.status === 'All' || t.status === filters.status;
    const matchPriority = filters.priority === 'All' || t.priority === filters.priority;
    const query = search.toLowerCase();
    const matchSearch =
      t.title.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query);
    return matchStatus && matchPriority && matchSearch;
  });

  const handleAddToQueue =(id) => {
    setQueue((prev) => ({ ...prev, [id]: true }));
  };

  const handleRemoveFromQueue = (id) => {
    setQueue((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleClearQueue =() => setQueue({});

  if (loading) return <StatusMessage type="loading" />;
  if (error) return <StatusMessage type="error" />;
  if (!visibleTickets.length) return <StatusMessage type="empty" />;

  return (
    <div className="space-y-6">
      {/* filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Status</span>
          <StatusFilter
            value={filters.status}
            onChange={(val) => setFilters((f) => ({ ...f, status: val }))}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Priority</span>
          <PriorityFilter
            value={filters.priority}
            onChange={(val) => setFilters((f) => ({ ...f, priority: val }))}
          />
        </div>
        <div className="flex-1">
          <SearchBox value={search} onChange={setSearch} />
        </div>
      </div>

{/* queue summary */}
      <MyQueueSummary
        tickets = {tickets.filter((t) => queue[t.id])}
        onRemove = {handleRemoveFromQueue}
        onClear = {handleClearQueue}
      />




      <h2 className="text-xl font-semibold">Tickets</h2>
      <TicketList
        tickets={visibleTickets}
        queue={queue}
        onAddToQueue={handleAddToQueue}
      />
    </div>
  );
}