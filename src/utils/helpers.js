export const getStatusColor = (status) => {
  const colors = {
    'Approval pending': 'bg-orange-100 text-orange-700',
    'Draft': 'bg-gray-100 text-gray-700',
    'Scheduled': 'bg-blue-100 text-blue-700',
    'Aborted': 'bg-red-100 text-red-700',
    'Ongoing': 'bg-orange-100 text-orange-600'
  };
  return colors[status] || 'bg-gray-100 text-gray-700';
};

export const truncateText = (text, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};