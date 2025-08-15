"use client";

import React, { useState } from "react";
import MainSupportPage from "./_components/MainSupportPage";
import SubmitRequestModal from "./_components/SubmitRequestModal";
import LiveChatPage from "./_components/LiveChatPage";
import AiAssistantPage from "./_components/AiAssistantPage";
import SupportTopicsPage from "./_components/SupportTopicsPage";

export default function SupportPage() {
  const [currentView, setCurrentView] = useState<
    "main" | "liveChat" | "aiAssistant" | "supportTopics"
  >("main");
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Event handlers
  const handleSubmitRequest = () => {
    setShowSubmitModal(true);
  };

  const handleLiveChat = () => {
    setCurrentView("liveChat");
  };

  const handleAiAssistant = () => {
    setCurrentView("aiAssistant");
  };

  const handleBrowseTopics = () => {
    setCurrentView("supportTopics");
  };

  const handleBackToMain = () => {
    setCurrentView("main");
  };

  const handleCloseModal = () => {
    setShowSubmitModal(false);
  };

  // Render based on current view
  switch (currentView) {
    case "liveChat":
      return <LiveChatPage onBack={handleBackToMain} />;

    case "aiAssistant":
      return <AiAssistantPage onBack={handleBackToMain} />;

    case "supportTopics":
      return <SupportTopicsPage onBack={handleBackToMain} />;

    default:
      return (
        <>
          <MainSupportPage
            onSubmitRequest={handleSubmitRequest}
            onLiveChat={handleLiveChat}
            onAiAssistant={handleAiAssistant}
            onBrowseTopics={handleBrowseTopics}
          />
          <SubmitRequestModal
            isOpen={showSubmitModal}
            onClose={handleCloseModal}
          />
        </>
      );
  }
}
