# Week 5 Lab (Lab 4): vSwitches and Port groups

**Lab manual: [Week5Lab.pdf](https://canvas.uts.edu.au/courses/42080/files/12780321?wrap=1 "Week5Lab-2023.pdf")[Download Week5Lab.pdf](https://canvas.uts.edu.au/courses/42080/files/12780321/download?download_frd=1)**

The updated VCSAv7.0 is here: [VCSAv7.0-26.zipLinks to an external site.](https://studentutsedu-my.sharepoint.com/:u:/g/personal/haimin_zhang_uts_edu_au/IQAz0YmI_nhbSKki9-wL6xo5AUBbVhvU-BAWHo34HaRN3tQ?e=bYkgg0).Please use the updated version for lab tasks.

---

**If you'd like to regenerate certificates by yourself (to repaire Expired Certificates on the VCSA ( unable to access 172.20.20.94)), please  follow the steps below: :**

**1. Start the appliance.** Power on the VCSA in VMware Workstation, then confirm `https://172.20.20.94:5480` loads and you can log in as `root`.

**2. Enable SSH.** In the `:5480` interface: **Access** → **Edit** → enable **SSH Login** → Save.

**3. Change the root shell.** The default appliance shell prints a banner that breaks file transfers. From your lab machine's terminal:

```
ssh root@172.20.20.94
```

If you get a `Command>` prompt, type `shell`. Then:

```
chsh -s /bin/bash root

```

**4. Copy the tool to the appliance.** Copy [vCert-6.1.2-20260713.zip](https://canvas.uts.edu.au/courses/42080/files/13270795?wrap=1 "vCert-6.1.2-20260713.zip")[Download vCert-6.1.2-20260713.zip](https://canvas.uts.edu.au/courses/42080/files/13270795/download?download_frd=1) `to your working directory, then open another terminal:   scp vCert-6.1.2-20260713.zip root@172.20.20.94:/tmp/`

**5. Extract and launch. (Go back to the first terminal).**

```
ssh root@172.20.20.94
cd /tmp
unzip -q vCert-6.1.2-20260713.zip
cd vCert-6.1.2-20260713
chmod +x vCert.py
./vCert.py
```

Type `y` to acknowledge the warning.

**6. Check current status.** Select option `1`. Several certificates will show **EXPIRED** — normally the solution users (`machine`, `vsphere-webclient`, `vpxd`, `vpxd-extension`, `hvc`, `wcp`) and VMDir.

**7. Reset the certificates.** Select option `6`, then **press Enter at every prompt** to accept the defaults — including the optional IP address, email, and SAN entries. vCert detects the appliance identity automatically.

```
Enter the country code [US]:                              (Enter)
Enter the Organization name [VMware]:                     (Enter)
Enter the Organizational Unit name [VMware Engineering]:  (Enter)
Enter the state [California]:                             (Enter)
Enter the locality (city) name [Palo Alto]:               (Enter)
Enter the IP address (optional):                          (Enter)
Enter an email address (optional):                        (Enter)
Enter any additional hostnames for SAN entries:           (Enter)
```

Generation takes several minutes. Do not interrupt.

When you see 'Restart VMware services [N]:', input  `y`

Finally, log in to `https://172.20.20.94/ui` as `administrator@vsphere.local`.

Following are the steps to solve the VMWork Station license expiration issue:

1. Verify that the user directory contains a hidden subdirectory .vmware  
2. Open the file preferences inside the .vmware subdirectory (~/.vmware/preferences)  
3. Add the following line to the end of the preferences file via a text editor of choice:  
pref.wspro.firstRunDismissedVersion = "17.5.2"

[Week 5 Lab (Lab 4): vSwitches and Port groups: 41891 42891 Cloud Computing Infrastructure Infrastructure for Cloud Computing - Spring 2026](https://canvas.uts.edu.au/courses/42080/pages/week-5-lab-lab-4-vswitches-and-port-groups-2?module_item_id=2770347)