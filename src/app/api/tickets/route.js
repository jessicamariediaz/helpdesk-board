import {NextResponse} from "next/server";

export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Exchange account not syncing for iOS Mail.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Jordan',
      updatedAt: '2025-10-30T15:12:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description: 'Battery drops from 100% to 20% in under two hours.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T12:30:00Z'
    },
    {
      id: 't-1004',
      title: 'Okta MFA prompts repeatedly',
      description: 'User receives MFA prompt every time they open a new tab.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Priya',
      updatedAt: '2025-10-28T09:21:00Z'
    },
    {
      id: 't-1005',
      title: 'Printer not responding on Floor 3',
      description: 'Queue stuck and jobs timing out for shared printer.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T07:00:00Z'
    },
    {
      id: 't-1006',
      title: 'Teams screen share fails',
      description: 'Screen sharing stops immediately after starting session.',
      priority: 'High',
      status: 'Open',
      assignee: 'Alex',
      updatedAt: '2025-10-26T06:00:00Z'
    },
    {
      id: 't-1007',
      title: 'New hire account provisioning',
      description: 'Automation failed to assign Office 365 and Slack licenses.',
      priority: 'Critical',
      status: 'On Hold',
      assignee: 'Morgan',
      updatedAt: '2025-10-25T04:45:00Z'
    },
    {
      id: 't-1008',
      title: 'Wi-Fi drops in Conference Room A',
      description: 'Intermittent disconnects during video meetings.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-10-24T08:15:00Z'
    },
    {
      id: 't-1009',
      title: 'Locked out of Salesforce',
      description: 'User account locked after multiple failed login attempts.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Sam',
      updatedAt: '2025-10-23T10:05:00Z'
    },
    {
      id: 't-1010',
      title: 'Zoom audio echoes',
      description: 'Severe echo reported by multiple attendees during meeting.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-22T06:00:00Z'
    }
  ];

  return NextResponse.json(tickets);
};
