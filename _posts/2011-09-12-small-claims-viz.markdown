---
layout: post
title:  "Small Claims Court Filings in North Carolina: A Graphical Exploration"
date:   2011-09-12 20:00:00 -0400
categories: legal data visualizations
---

The civil judicial system in North Carolina has long featured a “Magistrate’s Court” or Small Claims Court at its lowest rung. These courts were created to serve residents of the state who needed an avenue to inexpensively and quickly resolve disputes involving small sums of money. As Eric Steele observed in his 1981 paper “The Historical Context of Small Claims Courts,” these courts focus on “the ordinary day-to-day grievances and disputes involving the common man.” Without assuming that the disputes are simple just because they are “small,” the Small Claims Court has attempted to competently resolve the system’s largest docket of cases.

The modern design of North Carolina’s Small Claims Court was codified in 1965. Under Chapter 7A of the General Statutes as it was then written, civil claims filed in District Court, where the amount in controversy was not greater than $500, could be assigned to a magistrate “in the interest of expediency.” These cases generally proceeded without attorneys, entailed lower filing fees, and resulted in judgments within 30 days of the filing of the claim.

<blockquote>There is a strong desire in this State for improved access to civil justice in our courts. A crucial part of that is the ease of filing a small claim.</blockquote>

An integral feature of a small claims court has traditionally been a relatively low jurisdictional limit. As of October 1, 2004, when the General Assembly last raised the limit, all claims in Small Claims Court must allege damages of $5000 or less, exclusive of interest and costs. In that year, the amount represented about 14% of the average annual salary in the State, or 39% of the 2004 poverty threshold.

The North Carolina Court of Appeals wrote, in its 1987 opinion in Duke Power v. Daniels, that the State’s Small Claims Court was created “to provide our citizens, corporate as well as individual, with an expedient, inexpensive, speedy forum in which they can process litigation involving small sums without obtaining a lawyer, if they choose to do so.” Central to the court’s definition, then, is the concept that the court was “inexpensive,” and the subject matter jurisdiction was limited to “small sums.”

With this focus on the limit, there has been some interest in how its adjustment affects the court. In William Haemmel’s 1973 study of North Carolina small claims courts, the author identified a raise in the jurisdictional limit as a possible way to increase access to justice:

<blockquote>Consideration should … be given to increasing the jurisdictional amount in small claims actions. At present, claims in excess of $300.00 may not be brought in small claims court. An increase in the jurisdictional amount would increase the number of claims which would be heard by the magistrate. Thus, the overall accessibility to the small claims court by the general public would be enhanced.</blockquote>

There are interests other than a concern for access to justice as well. In the bill that enacted NC’s last increase, the legislators identified the move as a way to “manage resources,” suggesting that it was motivated by a desire to broaden the reach of the magistrates.

On the other hand, filing fees have been given somewhat less notice. Although the Court of Appeals defined the small claims court as an “inexpensive” forum, until recently small claims filing fees were an afterthought, indistinguishable from most any other administrative fee. From all appearances in the General Statutes, fees were raised merely as a result of budget concerns. For example, Session Law 2000-109 (1999 Session) increased small claims filing fees. At the same time, it increased public utility regulatory fees, jail fees, and fees for digital access to agency services, among others.

There appears to be little evidence that the legislature has used fees as a way to control filings or move them from one court to the other—all fees, be they District Court, Small Claims Court, telephone fees, or otherwise—were raised at the same time.

This is in contrast with other jurisdictions, where fees have been more explicitly managed as a check on filing rates. This often arises from a perceived need to control “frivolous” lawsuits. The U.S. Supreme Court amended its rules in the early 1990s to give itself more discretion over in forma pauperis motions. Rule 39.8 of the Rules of the Supreme Court of the United States allowed the Court to deny a motion to file in forma pauperis if it determined that the filing was frivolous or malicious. In Zatko v. California, the Court applied the rule to two petitioners. Its per curiam opinion explained that the new rule was necessary to provide some control over the in forma pauperis docket. The Court claimed a need for more control “[b]ecause in forma pauperis petitioners lack the financial disincentives—filing fees and attorney’s fees—that help to deter other litigants from filing frivolous petitions….”

The second of the Court’s listed “financial disincentives” to file a claim, attorney’s fees, is generally and by design not present in a small claims court. This leaves filing fees as one of the few barriers to entry for those who do not qualify for in forma pauperis status. This factor is easily quantifiable for any period of time, so it presents itself as a viable target for quantitative inspection.

The NC Supreme Court issued an Order on November 3, 2005 establishing the Equal Access to Justice Commission. This was in response to a felt need for the State to “expand access to civil legal representation for people of low income and modest means in North Carolina.” The Order also identified a need to “[d]evelop and implement other initiatives designed to expand civil access to justice, such as increasing community education, enhancing technology, developing assisted pro se programs … [for] low-income people in North Carolina.”

As the Court’s Order reflects, there is a strong desire in this State for improved access to civil justice in our courts. A crucial part of that is the ease of filing a small claim. At that level, financial disincentives (read, fees) would seem to play a central role.

In her influential work on systems analysis, Donella Meadows posited, “To ask whether elements, interconnections, or purposes are most important in a system is to ask an unsystemic question. All are essential. … But the least obvious part of the system … is often the most crucial determinant of the system’s behavior.” In that spirit, I undertook to explore some of the most basic quantifiables of the small claims court system: filing fees and caseloads.

I first compiled a table of changes in filing fees using Session Laws, up to June 2010. To standardize the data, it was adjusted to July 2010 dollars, using the CPI South Urban All Items monthly figures. The following two graphs show how these fees have changed over time.

![nc filing fees in 2010 us dollars](/img/costs/image8.jpg)

![percentage change in nc filing fees 1984-2010](/img/costs/image9.jpg)

One obvious trend is that, while adjusted fee amounts in District Court in 2010 were less than double the level they were at in 1984, adjusted fee amounts in Magistrate’s Court have almost tripled. In fact, in the twenty-six-year period reviewed, District Court fees increased 48% while Superior Court fees increased merely 21%. Magistrate’s Court fees, the fees that may make the most difference in whether a claim is filed or not, increased 140%. This is despite the legislature’s reducing Magistrate’s Court costs in 2008.

I wanted to explore the possibility that these changing economics of filing small claims have had some effect on filing rates. To do that, I took advantage of an issue-level breakdown of filing rates. In 1998, the Administrative Office of Courts began collecting data on the types of claims filed in Magistrate’s Court. Since then, the AOC has been generating monthly data that could show not just trends in total filings, but trends in specific types of filings as well. The AOC provided me data on the total number of filings for each month beginning in 1998, as well as the number of those filings that included a Summary Ejectment issue.

![summary ejectments v other small claims](/img/costs/image7.jpg)

This graph demonstrates an immediate benefit of breaking out the data. By doing so, we can see that while statewide non-Summary Ejectment filings per capita have declined in the time frame, Summary Ejectments per capita have actually changed little.

So fees have increased, and filings have decreased. This points to general trends, but it reveals little about the source of those trends. Using multivariate regression models, it may be possible to narrow the causes down, but such models applied to time series are notoriously fraught with hazards. Julian Faraway once observed, “The history of the study of the link between smoking and lung cancer shows that it takes a great deal of effort to progress beyond the observation of an association to strong evidence of causation. One can never be 100% sure.” Donella Meadows wrote, “[I]n trying to find statistical links that relate flows to each other, econometricians are searching for something that does not exist. There’s no reason to expect any flow to bear a stable relationship to any other flow.” An honest and plausible regression analysis is best left to the statistical experts to try and conjure.

Instead, I examined one possible cause visually, by culling the data for a kind of natural experiment. Many times, researchers can try to observe the effects in policy changes by finding a “control” population, and comparing the experimental population to that one. This can make it simpler to adjust for unknown variables such as economic changes and global shifts in perception and attitude. For example, if one wanted to look at whether more gun control laws reduced crime, one could compare crime data between states that enacted such laws and states that did not.

I took advantage of the AOC data set’s county-level breakdown of filings, and sought to compare counties of differing economic stations. To do so, I created two charts. Each chart shows the percentage change in per-capita civil filings from 2000-2009 for each court level. Percentages are shown for all 100 counties. In the lower chart, I’ve ordered the bars so that the leftmost bar represents the changes in the “richest” county (as measured by 2009 median income), and the rightmost bar represents the “poorest” county. In the upper chart, I ordered the bars by 2009 population. Owing to an almost certain covariance between population and income, the charts are quite similar.

![change in civil filings 2000-09](/img/costs/image32.jpg)

![change in civil filings 2000-09](/img/costs/image33.jpg)

Focusing on the Magistrate’s Court graph (labeled “CVM”) on the first chart, it doesn’t seem to show a clear pattern. Visually, then, we have no reason to believe that poorer, smaller counties have been decreasing their use of the small claims system in any different way than richer, more populous counties. The decrease is generally across the board.

These charts and graphs were designed to look at avenues for possible study, to ask more questions than they answer. And I think they do. Why did filings go down when the economy was improving? To what extent has the increase in fees been responsible for this? And how have the most recent fluctuations in filing fees affected filings, if at all? There are some rich avenues for exploration here.

Although the causes of fluctuations in small claims court filings in North Carolina are doubtless complex and nuanced, I hope these visualizations refine your understanding of the trends. A particularly interesting observation is the difference in the rate of increase of Small Claims Court fees versus other Court fees. The fact that Small Claims Court fees have risen so rapidly, by comparison, suggests that individuals with small claims are bearing increasingly greater shares of the financial costs of the state’s judicial system. At the same time, the numbers of monetary small claims filed each year are declining on a per capita basis. This is mainly the result of the legislature’s oversimplified fee increases: when Superior Court “phone systems” fees were raised by $1, Magistrate’s Court phone systems fees were raised by $1. This may be easier to draft, but it ignores the math. A dollar means more in a case involving $300 than in one involving $300,000. More importantly, a dollar means more to a person of low income and modest means.

The Equal Access to Justice Commission created several laudible goals when it was formed. Some are concrete but idealistic, such as the establishment of a right to counsel in civil cases. Others are not so much solutions as they are good civil hygiene (“Educate the public”). There is no mention of financial disincentives.

The true cost of filing a small claim had been decreasing since 2008, until the passage of the latest State appropriations bill. As of July 1, 2011, the cost of filing a small claim and having it served on a defendant is $126. In one day, Magistrate’s Court filing fees increased some 30%. (By comparison, the cost for a District Court claim is now $180.) And for the first time, a civil defendant asserting a counterclaim is charged as if he or she is filing a new suit, and any further filings that include a motion require an additional fee.
