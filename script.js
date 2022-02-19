$url = "https://api.twilio.com/2010-04-01/Accounts/ACc434053392b5bc39cc798d9c2c71e442/Messages.json"
                $params = @{ To = "+525510494402"; From = "+18608543449"; Body = "Hello from Twilio" }
                $secret = "be63d2d073eb01959081e31af381c14c" | ConvertTo-SecureString -asPlainText -Force
                $credential = New-Object System.Management.Automation.PSCredential(ACc434053392b5bc39cc798d9c2c71e442, $secret)
                Invoke-WebRequest $url -Method Post -Credential $credential -Body $params -UseBasicParsing | ConvertFrom-Json | Select sid, body

              