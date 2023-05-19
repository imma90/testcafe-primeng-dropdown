# testcafe-primeng-dropdown

Minimal working example of [issue 7603 - Currently there are problems with opening the dropdown](https://github.com/DevExpress/testcafe/issues/7602) in the Devexpress/testcafe project on Github. Testcafe does not work properly with the basic dropdown in primeng versions 14 and 15, but does work correctly in primeng version 13.

To run the tests:
```
npx testcafe chrome
```
## native automation

In [native automation mode](https://testcafe.io/documentation/404237/guides/intermediate-guides/native-automation-mode), the dropdowns work without problems, no matter the primeng version. In `.testcaferc.js`, edit the value of `"nativeAutomation"` and run the tests with the command above to see the difference.