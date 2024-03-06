"use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import {useSocket} from "@/components/socket-provider";

interface message {
    userId: number;
    content: string;
}

