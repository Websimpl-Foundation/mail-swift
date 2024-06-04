// // Components
// import { Button } from "@/components/ui/button";

// function Templates() {
//     return(
//         <div className="flex h-[100%] flex-col p-8">
// 			<div className="flex flex-row gap-5 justify-between">
// 				<div className="flex flex-row space-x-4">
// 					Design Templates
// 				</div>
// 				<div className="flex flex-row space-x-4">
// 					<Button variant="secondary">+ Create your own template</Button>
// 				</div>
// 			</div>

// 			<div className="mt-4 overflow-auto overflow-y-scroll no-scrollbar">
				
// 			</div>
// 		</div>
//     )
// }

// export default Templates;

// Components
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Card from "./Card" // Assuming you have a Card component

function Templates() {
    // Sample data for cards
    const cardsData = [
        { id: 1, title: "Card 1", description: 'https://i.graphicmama.com/blog/wp-content/uploads/2018/09/26071856/corporate-free-html-email-template.jpg' },
        { id: 2, title: "Card 2", description: "https://th.bing.com/th/id/OIP.eANvkXBfAxA3IWscZXJNOwAAAA?pid=ImgDet&w=227&h=300&rs=1"  },
        { id: 3, title: "Card 3", description: "https://th.bing.com/th/id/OIP.uS18CdPK_TS_Nit3JZO-rgAAAA?pid=ImgDet&w=218&h=300&rs=1"  },
        { id: 4, title: "Card 4", description: "https://i.graphicmama.com/blog/wp-content/uploads/2018/09/25142114/ecommerce-email-template-free-download.jpg"  },
        { id: 5, title: "Card 5", description: 'https://i.graphicmama.com/blog/wp-content/uploads/2018/09/26071856/corporate-free-html-email-template.jpg' },
        { id: 6, title: "Card 6", description: "https://th.bing.com/th/id/OIP.eANvkXBfAxA3IWscZXJNOwAAAA?pid=ImgDet&w=227&h=300&rs=1"  },
        { id: 7, title: "Card 7", description: "https://th.bing.com/th/id/OIP.uS18CdPK_TS_Nit3JZO-rgAAAA?pid=ImgDet&w=218&h=300&rs=1"  },
        { id: 8, title: "Card 8", description: "https://i.graphicmama.com/blog/wp-content/uploads/2018/09/25142114/ecommerce-email-template-free-download.jpg"  },
        { id: 9, title: "Card 1", description: 'https://i.graphicmama.com/blog/wp-content/uploads/2018/09/26071856/corporate-free-html-email-template.jpg' },
        { id: 10, title: "Card 2", description: "https://th.bing.com/th/id/OIP.eANvkXBfAxA3IWscZXJNOwAAAA?pid=ImgDet&w=227&h=300&rs=1"  },
        { id: 11, title: "Card 3", description: "https://th.bing.com/th/id/OIP.uS18CdPK_TS_Nit3JZO-rgAAAA?pid=ImgDet&w=218&h=300&rs=1"  },
        { id: 12, title: "Card 4", description: "https://i.graphicmama.com/blog/wp-content/uploads/2018/09/25142114/ecommerce-email-template-free-download.jpg"  },

        // Add more cards here
    ];

    // State to manage number of cards to display
    const [displayedCards, setDisplayedCards] = useState(8);

    // Function to handle "Load More" button click
    const handleLoadMore = () => {
        setDisplayedCards(prevCount => prevCount + 8);
    };

    const renderCards = () => {
        // Render cards based on the number of displayed cards
        const displayedCardsData = cardsData.slice(0, displayedCards);
        const rows = [];
        for (let i = 0; i < displayedCardsData.length; i += 4) {
            const row = displayedCardsData.slice(i, i + 4).map(card => (
                <div key={card.id} className="w-1/4">
                    <Card title={card.title} description={card.description} />
                </div>
            ));
            rows.push(<div key={i} className="flex flex-row space-x-4">{row}</div>);
        }
        return rows;
    };

    return(
        <div className="flex h-[100%] flex-col p-8">
            <div className="flex flex-row gap-5 justify-between">
                <div className="flex flex-row space-x-4">
                    Design Templates
                </div>
                <div className="flex flex-row space-x-4">
                    <Button variant="secondary">+ Create your own template</Button>
                </div>
            </div>

            <div className="mt-4 h-[calc(100vh-100px)] overflow-y-scroll" style={{ WebkitOverflowScrolling: 'touch' }}>
                {/* Render cards */}
                {renderCards()}
            </div>

            {/* Conditionally render "Load More" button */}
            {displayedCards < cardsData.length && (
                <div className="mt-4">
                    <Button variant="secondary" onClick={handleLoadMore}>Load More</Button>
                </div>
            )}
        </div>
    );
}

export default Templates; 