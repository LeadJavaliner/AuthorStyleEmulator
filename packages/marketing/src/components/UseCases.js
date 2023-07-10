import React from 'react';
import Slideshow from './Slideshow';

                  const flyingBird  = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="800">
                        <path id="bird" d="M5,50 C30,30 70,30 95,50 C80,70 20,70 5,50 Z" fill="#E95628">
                        <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#flightPath"/>
                        </animateMotion>
                        </path>
                        <path id="wing" d="M20,50 C35,40 65,40 80,50 C65,60 35,60 20,50 Z" fill="#FDE97B">
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite"/>
                        </path>
                        <path id="tail" d="M0,50 Q15,45 20,50 Q15,55 0,50 Z" fill="#FDE97B">
                        <animateMotion dur="2s" repeatCount="indefinite">
                            <mpath href="#flightPath"/>
                        </animateMotion>
                        </path>
                        <path id="beak" d="M90,48 L95,50 L90,52 L85,50 L90,48 Z" fill="#000000"/>
                        <circle cx="80" cy="50" r="2" fill="#000000"/>
                        <path id="flightPath" d="M-5,50 Q0,30 5,50 T15,50"/>
                        <text x="50" y="10" text-anchor="middle" fill="#000000" font-size="3">Philenthropy.</text>
                        <text x="50" y="15" text-anchor="middle" fill="#000000" font-size="3">Decentralized AI for the public good, access and control.</text>
                    </svg>);

                    const twoHoppingBalls= (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="900">
                            <path id="rabbit" d="M20,80 C30,60 70,60 80,80 Q80,90 75,95 Q70,100 65,95 Q60,90 60,80 Q60,75 65,70 Q70,65 75,70 Q80,75 80,80 Q80,90 75,95 Q70,100 65,95 Q60,90 60,80 Q60,75 65,70 Q70,65 75,70 Q80,75 80,80 Q80,90 75,95 Q70,100 65,95 Q60,90 60,80 Q60,75 65,70 Q70,65 75,70 Q80,75 80,80 Z" fill="#F7941D">
                            <animateMotion dur="1s" repeatCount="indefinite">
                                <mpath href="#hopPath"/>
                            </animateMotion>
                            </path>
                            <circle cx="55" cy="45" r="4" fill="#000000">
                            <animate attributeName="cy" values="45; 42; 45" dur="1s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="75" cy="45" r="4" fill="#000000">
                            <animate attributeName="cy" values="45; 42; 45" begin="0.5s" dur="1s" repeatCount="indefinite"/>
                            </circle>
                            <path id="hopPath" d="M0,80 Q40,50 80,80"/>
                            <text x="50" y="10" text-anchor="middle" fill="#000000" font-size="3">Protecting public figures from AI deep fakes</text>
                            <text x="50" y="15" text-anchor="middle" fill="#000000" font-size="3">across all social and mass media with decentralized identity.</text>
                        </svg>
                        );

                    const shoppingCart = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
                        <path d="M20,50 L25,70 H75 L80,50" fill="#F7941D"/>
                        <path d="M20,50 L80,50" fill="none" stroke="#000000" stroke-width="2"/>
                        <circle cx="30" cy="70" r="5" fill="#F7941D"/>
                        <circle cx="70" cy="70" r="5" fill="#F7941D"/>
                        </svg>
                        );

                    const bouncingBall = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="1024" height="900">
                        <circle cx="200" cy="200" r="50" fill="#F7941D">
                        <animate attributeName="cx" dur="4s" repeatCount="indefinite" values="200; 350; 200; 50; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
                        <animate attributeName="cy" dur="4s" repeatCount="indefinite" values="200; 50; 200; 350; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
                        </circle>
                        <text x="200" y="90" text-anchor="middle" fill="#000000" font-size="10">Mitigate bot scalping of both digital event tickets and real life electronics like the PS5.</text>
                        </svg>
                    );

                    const eventHorizon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="1024" height="1024">
                          <circle cx="200" cy="200" r="100" fill="#FDE97B" />
                          <circle cx="200" cy="200" r="50" fill="#000000">
                          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="200" cy="140" r="20" fill="#FFFFFF" />
                          <circle cx="200" cy="260" r="20" fill="#FFFFFF" />
                          <circle cx="200" cy="200" r="10" fill="#000000">
                          <animate attributeName="cx" dur="2s" repeatCount="indefinite" values="200; 240; 200; 160; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
                          </circle>
                          <text x="200" y="90" text-anchor="middle" fill="#000000" font-size="10">Secure AI learning, before and after behavior, and provide forensics.</text>
                      </svg>
                      );

                    const eyeBall = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="1024" height="1024">
                    <circle cx="200" cy="200" r="150" fill="#FFFFFF" />
                    <circle cx="200" cy="200" r="100" fill="#FDE97B" />
                    <circle cx="200" cy="200" r="50" fill="#000000">
                      <animate attributeName="cx" dur="2s" repeatCount="indefinite" values="200; 160; 200; 240; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
                      <animate attributeName="cy" dur="2s" repeatCount="indefinite" values="200; 240; 200; 160; 200" keyTimes="0; 0.25; 0.5; 0.75; 1" />
                    </circle>
                    <text x="200" y="90" text-anchor="middle" fill="#000000" font-size="10">Hello World!?</text>

                  </svg>
                  );

                  const notOrbiting = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="1024" height="900">
                  <circle cx="200" cy="200" r="80" fill="#F7941D" />
                  <circle cx="200" cy="120" r="30" fill="#FDE97B">
                    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                    <animateMotion dur="4s" repeatCount="indefinite">
                      <mpath href="#orbitPath" />
                    </animateMotion>
                  </circle>
                  <circle cx="200" cy="280" r="20" fill="#FFFFFF">
                    <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="2s" repeatCount="indefinite" />
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <mpath href="#orbitPath" />
                    </animateMotion>
                  </circle>
                  <path id="orbitPath" d="M200,120 A80,80 0 1,1 200,280 A80,80 0 1,1 200,120" fill="none" />
                  <text x="200" y="90" text-anchor="middle" fill="#000000" font-size="10">Fans with on chain reputation have better chance at securing high demand concert tickets.</text>
                </svg>
                );

                const orbiting = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="800" height="400">
                <circle cx="200" cy="160" r="50" fill="#F7941D">
                  <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="4s" repeatCount="indefinite" />
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#orbitPath" />
                  </animateMotion>
                </circle>
                <circle cx="200" cy="240" r="50" fill="#FDE97B">
                  <animateTransform attributeName="transform" type="rotate" from="180 200 200" to="540 200 200" dur="4s" repeatCount="indefinite" begin="2s" />
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#orbitPath" />
                  </animateMotion>
                </circle>
                <path id="orbitPath" d="M200,360 A200,200 0 1,1 200,40 A200,200 0 1,1 200,360" fill="none" />
                <text x="200" y="90" text-anchor="middle" fill="#000000" font-size="20">On chain financial reputation opening undercollateralized on chain loans.</text>

              </svg>
              
              );

             const securityCamera = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110" width="1024" height="550">
             <circle cx="50" cy="50" r="45" fill="#F7941D" />
             <path d="M50 20 L35 35 H65 L50 20" fill="#FFFFFF" />
             <circle cx="50" cy="50" r="15" fill="#FFFFFF" />
             <circle cx="50" cy="50" r="8" fill="#000000" />
             <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
             <text x="50" y="100" text-anchor="middle" fill="#000000" font-size="4">Secure video footage for use in court and to defend against claims of AI deep fake.</text>
           </svg>
           );

                      

const UseCases = () => {
    const slides = [
        twoHoppingBalls,
        eventHorizon,
        eyeBall,
        flyingBird,
        securityCamera,
        notOrbiting,
        orbiting,
        bouncingBall,
        
        
    ];
    return <Slideshow slides={slides} />;
};

export default UseCases;
