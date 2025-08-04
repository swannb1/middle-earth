type EmbedType = {
  name: string;
  id: string;
};

const ExperienceCarouselItem = ({ name, id }: EmbedType) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%] rounded-2xl shadow-lg overflow-hidden border-2 border-[rgba(211,175,55)]">
        <iframe className="aspect-video" src={`https://www.youtube.com/embed/${id}`} title={name} allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default ExperienceCarouselItem;
