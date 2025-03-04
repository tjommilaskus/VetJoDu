'use client'

import React from 'react';
import Link from 'next/link';
import {sendGAEvent} from "@next/third-parties/google";

function Frontpage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-5">
            <Link onClick={() => sendGAEvent({event: "buttonClicked", value: "xyz"})} href="/picturesite">
            <h1 className="lg:text-9xl text-4xl uppercase text-orange-400 font-bold">Vet Jo Du!</h1>
            </Link>
        </div>
    );
}

export default Frontpage;