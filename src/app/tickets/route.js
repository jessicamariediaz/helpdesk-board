//API route returning JSON

export async function GET() {
  const tickets= [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',      // Low | Medium | High | Critical
      status: 'Open',        // Open | In Progress | On Hold | Resolved
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    // ... add 11–15 more
  ];
  return Response.json(tickets);
}