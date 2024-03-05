"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {io as ClientIO} from "socket.io-client";

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false,
});

export const useSocket = () => { return useContext(SocketContext)};

export const Socketprovider = ({children}: {children: React.ReactNode}) => {
    const [socket, setSocket] = useState<any | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    
}