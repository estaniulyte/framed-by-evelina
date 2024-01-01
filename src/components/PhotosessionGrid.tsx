interface Item {
  name: string;
  slug: string;
  description: string;
  picture: string;
  types: string[];
  pictures: Object[];
}

interface Props {
  items: Item[];
}

const PhotosessionGrid = ({ items }: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-7'>
      {items.map((item) => {
        return (
          <div
            key={item.slug}
            className='grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-slate-100'
          >
            <div>
              <img
                className='w-full aspect-[5/6] object-cover'
                src={item.picture}
              ></img>
            </div>
            <div className='w-[80%] py-8 md:py-0 text-center m-auto text-xl 3xl:text-3xl tracking-wider leading-7'>
              {item.description}{' '}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotosessionGrid;
