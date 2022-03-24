# features:

- Has x-team scored a goal

# Architecture

- Checker: Calls NHL api and parses
- Message Broker: Listens for messages from Checker
- Broadcaster: Sends out notifications if event
