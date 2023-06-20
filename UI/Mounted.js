import React from "react";
import { useState, useEffect } from "react";
export default function Mounted() {
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    setLoadingData(false);
  });
}
