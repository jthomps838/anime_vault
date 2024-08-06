'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimePopup from './AnimePopup';

const MotionDiv = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleInfo = () => setIsOpen((prev) => !prev);
    return (
        <>
            <motion.div
                {...props}
                onClick={toggleInfo}
            >
                {props.children}
            </motion.div>
            {isOpen && (
                <AnimePopup
                    anime={props.anime}
                    closePopup={setIsOpen}
                />
            )}
        </>
    );
};

export default MotionDiv;
