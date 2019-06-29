### Status
[![Build Status](https://travis-ci.org/chad-autry/character-perspective-client.svg?branch=master)](https://travis-ci.org/chad-autry/character-perspective-client)

# character-perspective-client
Grid based game client components which only shows things the character can see

## Intended Features
* Dumb grid displays composite Font awesome icons \(using another of my frameworks \+ text sent from server\)
   * All vision logic would be server side
   * Positions sent relative to grid \(again no cheating\)
   * Dynamic grid size chosen by server \(could grow or shrink based on player view distance\)
* Dynamic server controlled status bars \(health, mana, sanity, whatever! again with composite FA icons\)
* Dynamic server controlled buttons \(Inventory, skills, whatever! Again with composite FA icons\)
* Console
   * All commands visible in console
   * 'Hidden' commands like 'open secret door' possible through console when not visible through menus
* Dynamic Context Menus: Long clicking on elements in the grid would given a context menu that could change
   * Eg: Search might be available, once searched 'open secret door' might become available through context \(plus the space's icon could change\)
* Modal grid panels
   * For inventory, or maybe even different views \(like through a window\)
* Timer Icons
   * This is to support some of my own game mechanic ideas, but allow timers to be shown on attached to grid elements or globally near the buttons/status bars
* gh-pages
   * Includes a mock client and server to show how components might be used
   
## Eventual Features
* Plugin Windows
   * Figure out how to allow client extensions the server can pop up \(like character screens, dialog windows, special 
* Chat bubbles
   * What it sounds like, dismiss\-able chat bubbles that show up near a character
* Animations/View Transitions
* Particle effects
* Targeting assistants
   * Cross hairs
   * Cones
