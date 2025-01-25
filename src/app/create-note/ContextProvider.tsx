import React, { createContext, useContext, useState, ReactNode, useRef } from 'react';

interface CreateNoteContext {
    boldRef:React.RefObject<HTMLButtonElement | null>
    boxSelectRef:React.RefObject<HTMLSelectElement | null>
}

export const NoteContext = createContext<CreateNoteContext>({
    boldRef: {current:null},
    boxSelectRef: {current:null}
});

export const NoteContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const boldRef = useRef<HTMLButtonElement>(null)
    const boxSelectRef = useRef<HTMLSelectElement>(null)
    return (
        <NoteContext.Provider  value={{ boldRef:boldRef, boxSelectRef:boxSelectRef }}>
            {children}
        </NoteContext.Provider>
    );
};

// Custom hook to use the context
export const useNoteContext = (): CreateNoteContext|undefined => {
    const context = useContext(NoteContext);
    return context;
};
