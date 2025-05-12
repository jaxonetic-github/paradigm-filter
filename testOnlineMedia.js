/**
 * @jest-environment jsdom
 */
import { render,within, screen } from "@testing-library/react";
import OnlineMedia from "../app/onlineMedia.js";
import {initialStoreState} from '../app/src/constants/state.js';
// add all jest-extended matchers
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe("OnlineMedia", () => {

  it("renders a heading", () => {
    render(<OnlineMedia dataArray={initialStoreState.resourcesData.onlineMediaContent}/>);

/*    const heading = screen.getByText("Current Teachers, Sources, or Guides of truths");

    expect(heading).toBeInTheDocument();
  const datatst = screen.getByText("Innerversity");
  expect(datatst).toBeInTheDocument();
*/
  //const cardCount = screen.getByRole("heading");

const mediaUnits = screen.getAllByRole("figure");
 //console.log(within(mediaUnits[0])) ;

//console.log(initialStoreState.resourcesData.onlineMediaContent[0].title);
//console.log('******************************',within(mediaUnits[0]));

//console.log(within(mediaUnits[0]).queryByText("Innerversity"));

//console.log(mediaUnits[0].children[0].children.length, mediaUnits[0].attributes,",", mediaUnits[0].childElementCount);
 //console.log(mediaUnits[0].tagName,"****",screen.getAllByRole('text'));
 //console.log(within(mediaUnits[0]).getAllByDisplayValue(initialStoreState.resourcesData.onlineMediaContent[0].title)) ;

//console.log(within(mediaUnits[0]).key)
//console.log(within(mediaUnits[0]).getByText("Innerversity"));

/*mediaUnits.forEach((outlet)=>
    {
      //const ttl = screen.getByText(outlet.title)
      //  console.log(within(outlet),"----->",outlet);
      //  console.log(within(outlet).getByText(outlet.title));

      within(outlet).getByText(outlet.category);
     // screen.getByText(outlet.title);
      within(outlet).getAllByRole("img").src;
      within(outlet).getAllByText(outlet.title);
      //  console.log("-----", within(outlet).getByRole(outlet.title).src);

    });*/
  initialStoreState.resourcesData.onlineMediaContent.forEach((record)=>
    {
      //first search for Card (or similar Container) by title
     // const ttl = screen.getByText(record.title)
     //   console.log(record.title,'******',within(ttl).textContent ,"----->");
      const filteredUnits = mediaUnits.filter((mediaUnit)=>{
        const unitAsNode = within(mediaUnit);
        const titleSearch = unitAsNode.queryByText(record.title);
        const categorySearch = unitAsNode.queryByText(record.category);
        const descriptionSearch = unitAsNode.queryByText(record.description);
        const imgSearch = unitAsNode.queryByRole('img');
        //console.log(imgSearch);
       
        return (titleSearch && descriptionSearch && categorySearch && imgSearch ); 
      });
     // within(ttl).getByText(record.title);
     // screen.getByText(outlet.title);
      expect(filteredUnits.length).toBe(1);
      // console.log("filtered-----", filteredUnits);

    });

  });

});
