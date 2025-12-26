import StackingCards from "@/components/ui/StackingCards";

interface ParallaxCardsProps {
  cards?: Array<{
    lightBg: string;
    darkBg: string;
    content: React.ReactElement;
  }>;
}

const Index = ({ cards }: ParallaxCardsProps) => {
  return (
    <div className="">

      {/* Stacking Cards Section */}
      <StackingCards/>

      {/* Next Section */}
    </div>
  );
};

export default Index;