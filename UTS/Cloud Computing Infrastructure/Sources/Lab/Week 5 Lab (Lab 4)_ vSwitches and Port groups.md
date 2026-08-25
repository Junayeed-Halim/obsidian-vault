**Lab manual: [Week5Lab.pdf](https://canvas.uts.edu.au/courses/42080/files/12780321?verifier=0jwOTqyZwIlSfp6ckdaesgROc0WQbPtnWVzTQCzQ&wrap=1)**

 

**Following are the steps to repaire Expired Certificates on the VCSA ( unable to access 172.20.20.94):**

**1. Start the appliance.** Power on the VCSA in VMware Workstation, then confirm https://172.20.20.94:5480 loads and you can log in as root.

**2. Enable SSH.** In the :5480 interface: **Access** → **Edit** → enable **SSH Login** → Save.

**3. Change the root shell.** The default appliance shell prints a banner that breaks file transfers. From your lab machine's terminal:

ssh root@172.20.20.94

If you get a Command> prompt, type shell. Then:

chsh -s /bin/bash root

**4. Copy the tool to the appliance.** Copy [vCert-6.1.2-20260713.zip](https://canvas.uts.edu.au/courses/42080/files/13270795?verifier=4a39ab76-31a3-4ffc-bc3a-838a5e0d4336&wrap=1) to your working directory, then from your lab machine's terminal:
scp vCert-6.1.2-20260713.zip root@172.20.20.94:/tmp/

**5. Extract and launch.**

ssh root@172.20.20.94
cd /tmp
unzip -q vCert-6.1.2-20260713.zip
cd vCert-6.1.2-20260713
chmod +x vCert.py
./vCert.py

Type y to acknowledge the warning.

**6. Check current status.** Select option 1. Several certificates will show **EXPIRED** — normally the solution users (machine, vsphere-webclient, vpxd, vpxd-extension, hvc, wcp) and VMDir.

**7. Reset the certificates.** Select option 6, then **press Enter at every prompt** to accept the defaults — including the optional IP address, email, and SAN entries. vCert detects the appliance identity automatically.

Enter the country code [US]: (Enter)
Enter the Organization name [VMware]: (Enter)
Enter the Organizational Unit name [VMware Engineering]: (Enter)
Enter the state [California]: (Enter)
Enter the locality (city) name [Palo Alto]: (Enter)
Enter the IP address (optional): (Enter)
Enter an email address (optional): (Enter)
Enter any additional hostnames for SAN entries: (Enter)

Generation takes several minutes. Do not interrupt.

When you see 'Restart VMware services [N]:', input  y

Finally, log in to https://172.20.20.94/ui as administrator@vsphere.local.

 

 

Following are the steps to solve the VMWork Station license expiration issue:

1. Verify that the user directory contains a hidden subdirectory .vmware
2. Open the file preferences inside the .vmware subdirectory (~/.vmware/preferences)
3. Add the following line to the end of the preferences file via a text editor of choice:
pref.wspro.firstRunDismissedVersion = "17.5.2"

 

Tutorial video (recorded in 2023):

[](https://canvas.uts.edu.au/api/v1/canvadoc_session?blob=%7B%22moderated_grading_whitelist%22:null,%22enable_annotations%22:null,%22enrollment_type%22:null,%22anonymous_instructor_annotations%22:null,%22submission_id%22:null,%22user_id%22:91260000000019672,%22attachment_id%22:670878,%22type%22:%22canvadoc%22%7D&hmac=1138309a894736ebab00ecd807103585b479bdf8)