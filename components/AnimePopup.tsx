import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { AnimeProp } from './AnimeCard';

interface Props {
    anime: AnimeProp;
    closePopup: Dispatch<SetStateAction<boolean>>;
}

const AnimePopup = ({ anime, closePopup }: Props) => {
    const close = (e: any) => {
        if (e.target.id === 'anime-modal') {
            closePopup(() => false);
        }
    };

    return (
        <section
            onClick={close}
            id='anime-modal'
            className='fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50'
        >
            <section className='bg-black rounded-lg shadow-lg p-8 z-50 flex flex-col justify-center'>
                <div className='flex flex-col gap-2'>
                    <Image
                        src={`https://shikimori.one${anime.image.original}`}
                        alt={anime.name}
                        height={200}
                        width={200}
                        className='rounded-xl max-w-md'
                    />
                    <section className='flex flex-col gap-2'>
                        <div className='py-1 px-2'>
                            <p className='text-white text-sm font-bold capitalize'>
                                {anime.kind}
                            </p>
                        </div>
                        <p>Released: {anime.released_on}</p>
                        <p>Aired: {anime.aired_on}</p>
                    </section>
                </div>
                <div className='py-4 flex flex-col gap-3'>
                    <div className='flex justify-between items-center gap-1'>
                        <h2 className='font-bold text-white text-xl line-clamp-1 w-full'>
                            {anime.name}
                        </h2>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image
                                src='./episodes.svg'
                                alt='episodes'
                                width={20}
                                height={20}
                                className='object-contain'
                            />
                            <p className='text-base text-white font-bold'>
                                {anime.episodes || anime.episodes_aired}
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image
                                src='./star.svg'
                                alt='star'
                                width={18}
                                height={18}
                                className='object-contain'
                            />
                            <p className='text-base font-bold text-[#FFAD49]'>
                                {anime.score}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AnimePopup;
