# RichPresence

Automatycznie włącza aplikację Rich Presence, kiędy włączysz Discorda.

Konfiguracja - Poradnik: https://www.youtube.com/watch?v=JIUOreTNj-o

![Example](https://2tihub.xyz/github/files/example_RichPresence.png)

## Rozwiązywanie problemów

### "Uwierzytelnianie ID klienta Rich Presence nie powiodło się. Upewnij się, że Twój identyfikator klienta jest poprawny."

1. Sprawdź swoje ID klienta w ustawieniach pluginu, aby upewnić się, że jest zgodny z identyfikatorem klienta aplikacji Rich Presence na stronie Discord Applications.
2. Zamknij Discorda, a następnie otwórz Menedżera zadań (lub dowolnego menedżera procesów, który ma Twój system operacyjny) i wymuś zabicie wszystkich pozostałych procesów Discord. Czasami Discord osieraca niektóre procesy z nieznanych powodów i miesza z IPC.
3. Podczas uruchamiania pluginu komputer nie był połączony z Internetem. Upewnij się, że masz połączenie z Internetem i uruchom ponownie klienta Discord.

### "Nie udało się ustawić aktywności Rich Presence."

1. Masz uruchomioną inną aplikację, która ma własną funkcję Rich Presence, co powoduje konflikt z tym pluginem. Zamknij wszystkie inne aplikacje korzystające z Rich Presence i uruchom ponownie klienta Discord.
2. Twój komputer nie był podłączony do Internetu, gdy plugin został uruchomiony. Upewnij się, że masz połączenie z Internetem i uruchom ponownie klienta Discord.
3. Upewnij się, że tytuły przycisków i adresy URL mają mniej niż 32 znaki.

### Obrazy się nie pojawiają.

1. Poczekaj 24 godziny. Przetwarzanie twoich obrazów przez Discorda może trochę zająć.

### Rich Presence nie jest wyświetlana 10 sekund po uruchomieniu i nie ma żadnych widocznych błędów. 

1. Upewnij się, że plugin jest włączony.
2. Przejdź do Ustawień użytkownika > Aktywność w grze i włącz Wyświetlaj aktualnie uruchomioną grę jako status. Jeśli był już włączony, wyłącz go, odczekaj 5 sekund i włącz go ponownie.
3. Wyłącz eksperymentalne ustawienie Wstrzykiwania Zdarzeń RPC, jeśli jest włączone, i uruchom ponownie Discorda.
4. Poczekaj 3 godziny, niech Twój klient Discord będzie stale otwarty. Czasami Discordowi może zająć dużo czasu, aby wyświetlić lub zaktualizować twoją Rich Presence.

### Żadne z tych rozwiązań nie działa.

1. Spróbuj powtórzyć wyżej podane kroki, jeśli to nie pomoże, ponownie zainstaluj plugin.