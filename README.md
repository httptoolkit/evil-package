# evil-package

An npm package demonstrating how packages can steal your data (but not actually doing so!)

This captures the environment variable `$PLEASE_STEAL_THESE_CREDENTIALS` and sends it to an evil site when the package is installed or required.

The evil site in question is `evil.test` - note that `.test` is a reserved TLD, which will never resolve, and so these requests will always fail, that's OK.