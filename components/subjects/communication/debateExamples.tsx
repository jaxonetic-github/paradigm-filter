"use client"
import React from "react";
import  {Divider, Link} from "@heroui/react";
import {YoutubeEmbed} from '@/components/utils/youtubeEmbed.js';
import {Tabs, Tab, Card, CardBody} from "@heroui/react";

export default function DebateExamples(){
    return (<div>
        <div className="max-w-md">
      <Tabs aria-label="Options">
        <Tab key="Wesling" title="Dr Francis Cress Wesling">
          <Card>
            <CardBody className="mx-auto flex">
{YoutubeEmbed('Oc-rYl9R7bs')}
{YoutubeEmbed('lZsCxMcV7wE')}
{YoutubeEmbed('-ZXWaps2Z2g')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="KwameToure" title="Kwame Toure (Stokely Carmichael)">
          <Card>
            <CardBody>
{YoutubeEmbed('HvksaM7rRX0')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="shabazz" title="El Hajj Malik El Shabazz">
          <Card>
            <CardBody>
{YoutubeEmbed('7sLQTC5GcuU')}
{YoutubeEmbed('iAgNk4LzbIw')}
{YoutubeEmbed('M7SgS2yPRF0')}
{YoutubeEmbed('n88ONdIISV4')}
            </CardBody>
          </Card>
        </Tab>
        <Tab key="farrakan" title="The Honorable Minister Farrakan">
          <Card>
            <CardBody>
     {YoutubeEmbed('wwbRugNYcVk')}
 {YoutubeEmbed('CdQzPVIpmvc')}
 {YoutubeEmbed('E7P1ntj2LHc')}
 {YoutubeEmbed('LMGaBrPGyG0')}
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
        </div>);
}


