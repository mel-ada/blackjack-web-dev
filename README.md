# blackjack-web-dev
## Description

Create a blackjack to be played in a web browser based on the command line version available here: https://github.com/phoniks/BlackJack
## Context

This goal will teach the difference between synchronous and asynchronous applications.
## Specifications

_List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product._

 Blackjack:
- [ ]  Dealer and Player characters Dealer Logic:
  - [ ]  Dealer gives out cards in specific order
  - [ ]  Dealer gives out:
    - [ ]  one card face up to player
    - [ ]  one card face up to Dealer
    - [ ]  one card face up to player
    - [ ]  one card face up to Dealer
    - [ ]  shuffle the deck
    - [ ]  Dealer plays, hitting while 16 or under (17 or more, dealer stays)
    - [ ]  If dealer hits and busts, player wins
- [ ] Player Logic:
- [ ]  if player gets Blackjack right at the start (Natural), player wins
- [ ]  Repeat hit or stay until player chooses to stay:
- [ ]  Player chooses to hit or stay
- [ ]  if player goes over 21, player busts
- [ ] Backend Game Logic:
- [ ]  Compare player total to dealer total, highest wins
- [ ]  Repeat until player chooses to stay:
- [ ]  Player chooses to hit or stay
- [ ]  If hits and bust (go over 21), automatically loses
- [ ] New Features
- [ ]  Multiple players
- [ ]  AI Players
- [ ]  Double Down
- [ ]  Split/Resplit
- [ ]  The artifact produced is properly licensed, preferably with the MIT license.
- [ ] Game is playable in a web browser.
- [ ] Game is saveable
- [ ] Has an attractive UI. 
- [ ] Use React to implement the project 

##Stretch Goals:
- [ ] Betting
- [ ] If player wins, players get their bet back, doubled
- [ ] Place a bet at the beginning of the hand.
- [ ] Handle bets for additional circumstances (double down, split, etc.)
- [ ] Hot Seat Multiplayer
- [ ] Insurance



### Required

_Do not remove these specs - they are required for all goals_.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
