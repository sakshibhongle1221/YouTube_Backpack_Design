import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Building a YouTube Clone with React",
      channel: "Sakshi",
      views: "1.2M views • 2 days ago"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      title: "How to Start Coding",
      channel: "CodeLife",
      views: "500K views • 1 week ago"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "My Desk Setup",
      channel: "Astrid",
      views: "2M views • 3 days ago"
    },
     {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Make a Netflix Clone",
      channel: "Frontend Mastery",
      views: "100K views • 5 hours ago"
    },
    {
        id: 5,
        thumbnail: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
        title: "Learning JavaScript",
        channel: "Blah Blah",
        views: "15K views • 1 hour ago"
      },
      {
        id: 6,
        thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        title: "Complete Backend Course",
        channel: "Backend Mastery",
        views: "900K views • 1 month ago"
      },
      {
        id: 7,
        thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        title: "The Future of AI",
        channel: "Tech Tomorrow",
        views: "3.4M views • 1 year ago"
      },
      {
        id: 8,
        thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Learn Docker",
        channel: "DevOps Mastery",
        views: "45K views • 2 days ago"
      }
  ];

  return (
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        alignItems: 'stretch', 
        gap: '20px', 
        padding: '20px' 
    }}>
      {videos.map((video) => (
        <VideoCard 
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            channel={video.channel}
            views={video.views}
        />
      ))}
    </div>
  );
};

export default VideoGrid;