import React, { useMemo, useState } from 'react';
import '../styles/VideoGrid.css';
import VideoCard from './VideoCard';
import { BpkLargeSpinner } from '@skyscanner/backpack-web/bpk-component-spinner';
import BpkText, { TEXT_STYLES } from '@skyscanner/backpack-web/bpk-component-text';

const VideoGrid = ({ selectedCategory }) => {
  const [isLoading] = useState(false);

  const filteredVideos = useMemo(() => {
    const videos = [
      {
        id: 1,
        thumbnail: 
          'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Building YouTube with React',
        channel: 'Sakshi',
        views: '1.2M views • 2 days ago',
        category: 'React',
      },
      {
        id:  2,
        thumbnail: 
          'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        title: 'How to Start Coding',
        channel: 'CodeLife',
        views: '500K views • 1 week ago',
        category: 'React',
      },
      {
        id: 3,
        thumbnail:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'My Desk Setup',
        channel: 'Astrid',
        views: '2M views • 3 days ago',
        category: 'Computers',
      },
      {
        id: 4,
        thumbnail:
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Make a Netflix Clone',
        channel: 'Frontend Mastery',
        views: '100K views • 5 hours ago',
        category: 'Netflix',
      },
      {
        id: 5,
        thumbnail:
          'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        title: 'Learning JavaScript',
        channel: 'Blah Blah',
        views: '15K views • 1 hour ago',
        category: 'React',
      },
      {
        id: 6,
        thumbnail:
          'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'Complete Backend Course',
        channel: 'Backend Mastery',
        views: '900K views • 1 month ago',
        category: 'Live',
      },
      {
        id: 7,
        thumbnail:
          'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'The Future of AI',
        channel: 'Tech Tomorrow',
        views: '3. 4M views • 1 year ago',
        category: 'News',
      },
      {
        id: 8,
        thumbnail:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80',
        title: 'Learn Docker',
        channel: 'DevOps Mastery',
        views: '48k views • 2 days ago',
        category: 'Gaming',
      },     
    ];

    if (selectedCategory === 'All') return videos;
    return videos.filter((video) => video.category === selectedCategory);
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <div className="video-grid-loading">
        <BpkLargeSpinner />
        <BpkText textStyle={TEXT_STYLES.bodyDefault}>
          Loading videos...
        </BpkText>
      </div>
    );
  }

  if (filteredVideos.length === 0) {
    return (
      <div className="video-grid-empty">
        <BpkText textStyle={TEXT_STYLES.bodyDefault}>
          select a different category
        </BpkText>
      </div>
    );
  }

  return (
    <div className="video-grid">
      {filteredVideos.map((video) => (
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