export const lessonsData = {
  units: Array.from({ length: 5 }, (_, unitIndex) => ({
    id: unitIndex + 1,
    title: `Unit ${unitIndex + 1}`,
    lessons: Array.from({ length: 6 }, (_, lessonIndex) => ({
      id: lessonIndex + 1,
      title: `Lesson ${lessonIndex + 1}`,
      description: `Description for lesson ${lessonIndex + 1} in unit ${unitIndex + 1}`,
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // placeholder YouTube embed URL
      vocabulary: ['hello', 'world', 'learn', 'fun', 'kids']
    }))
  }))
};