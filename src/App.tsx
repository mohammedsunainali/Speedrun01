import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { NewSessionDialog } from './components/NewSessionDialog';
import { Landing } from './screens/Landing';
import { IdeaIntake } from './screens/IdeaIntake';
import { MentorWorkspace } from './screens/MentorWorkspace';
import { JourneyOverview } from './screens/JourneyOverview';
import { StepDetail } from './screens/StepDetail';
import { FounderSnapshot } from './screens/FounderSnapshot';
import { Sessions } from './screens/Sessions';
import { Templates } from './screens/Templates';

type Screen = 'landing' | 'idea-intake' | 'mentor-workspace' | 'journey-overview' | 'step-detail' | 'founder-snapshot' | 'sessions' | 'templates';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [sessionData, setSessionData] = useState<any>(null);
  const [isNewSessionOpen, setIsNewSessionOpen] = useState(false);

  const navigateTo = (screen: Screen) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const handleStartSession = () => {
    setIsNewSessionOpen(true);
  };

  const handleSessionCreated = (data: { name: string; template: string }) => {
    // In a real app, we would create the session ID here
    console.log('Session created:', data);
    setSessionData({ ...sessionData, ...data });
    navigateTo('idea-intake');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <Landing 
            onStart={handleStartSession}
            onViewTemplates={() => navigateTo('templates')}
          />
        );
      case 'idea-intake':
        return (
          <IdeaIntake 
            onBack={() => navigateTo('landing')}
            onSubmit={(data) => {
              setSessionData({ ...sessionData, ...data });
              navigateTo('mentor-workspace');
            }}
          />
        );
      case 'mentor-workspace':
        return (
          <MentorWorkspace 
            sessionTitle={sessionData?.name || sessionData?.idea?.substring(0, 20) + '...' || "New Session"}
            onBack={() => navigateTo('landing')}
            onFinishStep={() => navigateTo('journey-overview')}
          />
        );
      case 'journey-overview':
        return (
          <JourneyOverview 
            onBack={() => navigateTo('landing')}
            onContinue={() => navigateTo('step-detail')}
          />
        );
      case 'step-detail':
        return (
          <StepDetail 
            stepId="2"
            onBack={() => navigateTo('journey-overview')}
            onComplete={() => navigateTo('founder-snapshot')}
          />
        );
      case 'founder-snapshot':
        return (
          <FounderSnapshot 
            onBack={() => navigateTo('landing')}
          />
        );
      case 'sessions':
        return (
          <Sessions 
            onOpenSession={() => navigateTo('journey-overview')}
          />
        );
      case 'templates':
        return (
          <Templates 
            onUseTemplate={() => navigateTo('idea-intake')}
          />
        );
      default:
        return <Landing onStart={handleStartSession} onViewTemplates={() => navigateTo('templates')} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen} 
      onNavigate={navigateTo}
      onNewSession={handleStartSession}
    >
      {renderScreen()}
      <NewSessionDialog 
        open={isNewSessionOpen} 
        onOpenChange={setIsNewSessionOpen}
        onContinue={handleSessionCreated}
      />
    </Layout>
  );
}
