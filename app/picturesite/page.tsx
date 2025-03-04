'use client'

import React from 'react';
import Image from 'next/image';

export default function Page() {
    const pictures = [
        {
            src: 'file.svg',
            alt: 'Tjommi',
            description: 'Ikke tvil igjen!',
            width: 250,
            height: 250,
        }
    ];
    return (
        <div className="min-h-screen">
            <h1 className="lg:text-9xl text-4xl uppercase text-orange-400 font-bold flex items-center justify-center p-5">
                Tvilte du da?
            </h1>
            <div className="image-gallery flex items-center justify-center p-5">
                {pictures.map((picture, index) => (
                    <div key={index} className="image-container">
                        <Image
                            src={picture.src}
                            alt={picture.alt}
                            width={picture.width}
                            height={picture.height}
                            className="gallery-image"/>
                    </div>
                ))}
            </div>
        </div>
    )
}